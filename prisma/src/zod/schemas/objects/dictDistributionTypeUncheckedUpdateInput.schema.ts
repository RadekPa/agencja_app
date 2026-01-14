import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInput.schema'

const makeSchema = () => z.object({
  DistID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  DistDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictDistributionTypeNestedInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUncheckedUpdateInput>;
export const dictDistributionTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
