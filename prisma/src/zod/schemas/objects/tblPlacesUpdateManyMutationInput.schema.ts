import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PlaceDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblPlacesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.tblPlacesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesUpdateManyMutationInput>;
export const tblPlacesUpdateManyMutationInputObjectZodSchema = makeSchema();
