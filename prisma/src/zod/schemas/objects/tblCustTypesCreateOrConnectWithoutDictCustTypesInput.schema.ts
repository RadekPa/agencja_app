import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustTypesWhereUniqueInputObjectSchema as tblCustTypesWhereUniqueInputObjectSchema } from './tblCustTypesWhereUniqueInput.schema';
import { tblCustTypesCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesCreateWithoutDictCustTypesInput.schema';
import { tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema as tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema } from './tblCustTypesUncheckedCreateWithoutDictCustTypesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustTypesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustTypesCreateWithoutDictCustTypesInputObjectSchema), z.lazy(() => tblCustTypesUncheckedCreateWithoutDictCustTypesInputObjectSchema)])
}).strict();
export const tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectSchema: z.ZodType<Prisma.tblCustTypesCreateOrConnectWithoutDictCustTypesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesCreateOrConnectWithoutDictCustTypesInput>;
export const tblCustTypesCreateOrConnectWithoutDictCustTypesInputObjectZodSchema = makeSchema();
