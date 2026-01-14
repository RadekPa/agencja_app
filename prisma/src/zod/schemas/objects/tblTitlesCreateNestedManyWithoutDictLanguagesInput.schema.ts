import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutDictLanguagesInputObjectSchema as tblTitlesCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictLanguagesInput.schema';
import { tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema as tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateOrConnectWithoutDictLanguagesInput.schema';
import { tblTitlesCreateManyDictLanguagesInputEnvelopeObjectSchema as tblTitlesCreateManyDictLanguagesInputEnvelopeObjectSchema } from './tblTitlesCreateManyDictLanguagesInputEnvelope.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblTitlesCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblTitlesWhereUniqueInputObjectSchema), z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedManyWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedManyWithoutDictLanguagesInput>;
export const tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectZodSchema = makeSchema();
