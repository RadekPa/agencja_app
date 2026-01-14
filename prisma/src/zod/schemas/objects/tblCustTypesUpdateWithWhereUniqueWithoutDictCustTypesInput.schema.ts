import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesUpdateWithoutDictCustTypesInputObjectSchema as tblCustTypesUpdateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUpdateWithoutDictCustTypesInput.schema';
import { tblCustTypesUncheckedUpdateWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedUpdateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedUpdateWithoutDictCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblCustTypesUpdateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUncheckedUpdateWithoutDictCustTypesInputObjectSchema)])
}).strict();
export const tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInput>;
export const tblCustTypesUpdateWithWhereUniqueWithoutDictCustTypesInputObjectZodSchema = makeSchema();
