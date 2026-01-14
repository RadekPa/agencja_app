import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutDictArticlesInputObjectSchema as dictLanguagesCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesCreateWithoutDictArticlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutDictArticlesInput.schema';
import { dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectSchema as dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutDictArticlesInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectSchema).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateNestedOneWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateNestedOneWithoutDictArticlesInput>;
export const dictLanguagesCreateNestedOneWithoutDictArticlesInputObjectZodSchema = makeSchema();
