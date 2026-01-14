import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutDictCoverFormatInputObjectSchema as tblTitlesCreateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesCreateWithoutDictCoverFormatInput.schema';
import { tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema as tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictCoverFormatInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutDictCoverFormatInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutDictCoverFormatInput>;
export const tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectZodSchema = makeSchema();
