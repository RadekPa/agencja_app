import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  Main: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Lp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblTitAuthorsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsUpdateManyMutationInput>;
export const tblTitAuthorsUpdateManyMutationInputObjectZodSchema = makeSchema();
