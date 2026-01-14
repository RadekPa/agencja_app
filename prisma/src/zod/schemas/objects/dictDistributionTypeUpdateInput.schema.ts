import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUpdateManyWithoutDictDistributionTypeNestedInputObjectSchema as tblAgrRightsUpdateManyWithoutDictDistributionTypeNestedInputObjectSchema } from './tblAgrRightsUpdateManyWithoutDictDistributionTypeNestedInput.schema'

const makeSchema = () => z.object({
  DistDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsUpdateManyWithoutDictDistributionTypeNestedInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeUpdateInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUpdateInput>;
export const dictDistributionTypeUpdateInputObjectZodSchema = makeSchema();
