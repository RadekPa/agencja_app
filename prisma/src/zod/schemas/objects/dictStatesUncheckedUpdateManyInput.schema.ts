import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  StateID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CountryID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  StateAbb: z.union([z.string().max(2), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  StateName: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const dictStatesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.dictStatesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesUncheckedUpdateManyInput>;
export const dictStatesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
