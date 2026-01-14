import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateNestedManyWithoutDictDistributionTypeInputObjectSchema as tblAgrRightsCreateNestedManyWithoutDictDistributionTypeInputObjectSchema } from './tblAgrRightsCreateNestedManyWithoutDictDistributionTypeInput.schema'

const makeSchema = () => z.object({
  DistDesc: z.string().max(30),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedManyWithoutDictDistributionTypeInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeCreateInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeCreateInput>;
export const dictDistributionTypeCreateInputObjectZodSchema = makeSchema();
