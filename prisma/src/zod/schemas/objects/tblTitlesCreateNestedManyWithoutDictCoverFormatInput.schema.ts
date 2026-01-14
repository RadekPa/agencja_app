import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutDictCoverFormatInputObjectSchema as tblTitlesCreateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesCreateWithoutDictCoverFormatInput.schema';
import { tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema as tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictCoverFormatInput.schema';
import { tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema as tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema } from './tblTitlesCreateOrConnectWithoutDictCoverFormatInput.schema';
import { tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectSchema as tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectSchema } from './tblTitlesCreateManyDictCoverFormatInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutDictCoverFormatInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictCoverFormatInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutDictCoverFormatInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyDictCoverFormatInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesCreateNestedManyWithoutDictCoverFormatInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedManyWithoutDictCoverFormatInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedManyWithoutDictCoverFormatInput>;
export const tblTitlesCreateNestedManyWithoutDictCoverFormatInputObjectZodSchema = makeSchema();
